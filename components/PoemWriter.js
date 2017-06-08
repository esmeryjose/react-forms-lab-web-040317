import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem:"",
      validContent: true
    };
  }

  wrongPoem(){
    return(
      <div id="poem-validation-error" style={{color: 'red'}}>
        This poem is not written in the right structure!
      </div>
    )
  }

  parseContent(poem){
    let contentArr = poem.replace(/\r\n/g, "\n").split("\n");
    let trimContent = contentArr.map(content=>(
      content.split(" ").filter(word => word!== "" && word!=="	")
    ));
    return trimContent;
  }

  validPoem(poem){
    const parsePoem = this.parseContent(poem);
    if (parsePoem.length===3 && parsePoem[0].length===5
        && parsePoem[1].length===3
        && parsePoem[2].length===5) {

      return true
    } else {
      return false
    }
  }

  handleChange(e){
    debugger;
    const poem = e.target.value;
    this.setState({
      poem:poem,
      validContent: this.validPoem(poem)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange.bind(this)}/>
        {this.state.validContent ? null : this.wrongPoem.call(this)}
      </div>
    );
  }
}
