import { PureComponent } from "react";
import "./PageNotFound.scss";

class PageNotFound extends PureComponent<any, any> {
  render() {
    return (
      <div>
        Oops something went wrong! <a href="/#">Back</a>
      </div>
    );
  }
}

export default PageNotFound;
