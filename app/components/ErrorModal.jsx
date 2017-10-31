import React from 'react';

class ErrorModal extends React.Component{
    componentDidMount(){
        var modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }

    closeModal(e) {
        e.preventDefault();
        console.log('closing.....');
    }
    render() {
        return (
        <div className="reveal" id="errorModal" className="reveal tiny text-center" data-reveal="">
            <h4>Some title</h4>
            <p>Error message</p>
            <p>
                <button className="button hollow" onClick={this.closeModal}>
                    Okay
                </button>
            </p>
        </div>
        )
    }
}; 


export default ErrorModal;