import React, { PureComponent } from 'react'

export default class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        // 이름이 비어있지 않고 있다면 onAdd라는 함수에 전달해준다.
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        this.formRef.current.reset();
    };

    render() {
        console.log('habitAddForm')
        return (
            // form에서는 버튼이 눌려지면 submit이라는 이벤트가 발생한다.
            <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder='Habit'
                />
                <button className='add-btn'>Add</button>
            </form>
        )
    }
}
