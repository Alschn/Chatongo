import json

from channels.generic.websocket import AsyncWebsocketConsumer
from django.conf import settings


class ChatConsumer(AsyncWebsocketConsumer):
    chat_name: str
    chat_group_name: str
    private_group_name: str

    commands = {}
    private_commands = {}

    async def connect(self):
        if not (user := self.scope.get('user')) or user.is_anonymous:
            await self.close()

        self.chat_name = self.scope['url_route']['kwargs']['chat_name']
        self.chat_group_name = f'chat_{self.chat_name}'  # Group for all users in the chat
        self.private_group_name = f"chat_user_{user.username}"  # Group for each individual client

        # public room
        await self.channel_layer.group_add(
            self.chat_group_name,
            self.channel_name
        )

        # private room - user specific
        await self.channel_layer.group_add(
            self.private_group_name,
            self.channel_name
        )

        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)

        if settings.DEBUG:
            print('Received\n' + str(data))

        if not (command := data.get('command')):
            return

        if command in self.private_commands:
            await self.channel_layer.group_send(
                self.private_group_name,
                {
                    'type': self.private_commands[command],
                    'data': data.get('data'),
                }
            )
        else:
            await self.channel_layer.group_send(
                self.chat_group_name,
                {
                    'type': self.commands.get(command, 'invalid_command'),
                    'data': data.get('data'),
                }
            )

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.chat_group_name,
            self.channel_name
        )

        await self.channel_layer.group_discard(
            self.private_group_name,
            self.channel_name
        )

    async def invalid_command(self, event):
        pass
