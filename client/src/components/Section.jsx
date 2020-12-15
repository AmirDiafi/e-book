import React from 'react'
import Card from './Card'

class Section extends React.Component {

    render() {
        let data = this.props.data.filter(card=>card.type===this.props.type)
        let card = []
        if(data.length>1) {
            card.push(data[0])
            card.push(data[1])
        } else if (data.length === 1) {
            card.push(data[0])
        }
        return (
            data.length!==0
            ?<section>
                <h2 className="text-center">
                    section of {this.props.type}
                </h2>
                <div className="cards">
                    {card.map(card=> 
                        <Card 
                            key={card._id}
                            data={card}
                            path={"images/"}
                        />
                    )}
                    <Card 
                        link='link'
                        type={this.props.type}
                        data={data}
                    />
                </div>
                <hr/>
            </section>
            :null
        )
    }
}
 
export default Section