
import React from "react"
import mditor from "mditor/dist/js/mditor"
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
    var mditor1 =  mditor.fromTextarea(document.getElementById('editor'))
  }
}
