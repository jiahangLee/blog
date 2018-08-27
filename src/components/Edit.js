
import React from "react"
import  * as Mditor from "mditor/src/client/index"
import "mditor/src/client/index.less"
export default class Edit extends React.Component{

  render(){
    return(
      <div>
        <textarea id="md_editor">
        </textarea>
      </div>
    )
  }

  componentDidMount(){

  }
}
