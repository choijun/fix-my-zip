import React, { Component } from 'react';
var _ = require('lodash');
import { ChartArea, StackedBar } from 'viiksetjs';


let data = [
  {issue: 'pothole', true: 0, false: 0},
  {issue: 'streetlight', true: 0, false: 0},
  {issue: 'traffic-light', true: 0, false: 0}
]


class BarGraph extends Component {

  componentDidMount(){
    const { issues } = this.props;
    let intermed = issues.map(elem => _.pick(elem, ['issue', 'fixed']))
    intermed.forEach(element => {
      if(element.issue === 'pothole'){
        if(element.fixed) data[0].true ++
        else data[0].false++;
      }
      if(element.issue === 'streetlight'){
        if(element.fixed) data[1].true ++
        else data[1].false++;
      }
      if(element.issue === 'traffic-light'){
        if(element.fixed) data[2].true ++
        else data[2].false++;
      }
    })
  }



  render(){
    return (
      <div>
        <h2 className="component-header">Percent Complete by Issue</h2>
        <img src="https://study.com/cimages/multimages/16/image_stacked_bar_chart_example_two_resized.jpg"/>
        {/* <ChartArea
          data={data}
          type={"linear"}
          color="grey"
          xKey='issue'
          stroke="grey"
          nogrid
          yKey='issue'
          yTickLabelProps={() => ({ dx: '-3rem', fontSize: 10, strokeWidth: '0.5px' })}
          noYaxis='horizontal'
         >
           <StackedBar
             colors={['#51344D', '#6F5060', '#A78682']}
             keys={['pothole', 'streetlight', 'traffic-light']}
           />
      </ChartArea> */}
      </div>
    )
  }
}

export default BarGraph;

