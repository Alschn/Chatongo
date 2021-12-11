import {PureComponent} from "react";
import "./PageNotFound.scss";
import {Box} from "@chakra-ui/react";

class PageNotFound extends PureComponent<any, any> {
  render() {
    return (
      <Box>
        Oops something went wrong! <a href="/#">Back</a>
      </Box>
    );
  }
}

export default PageNotFound;
