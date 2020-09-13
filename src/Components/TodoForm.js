import React, { useState } from 'react';




const TodoForm = ({setState,State}) => {
    // const handleInputChange1 = () => handleInputChange();
    // const handleInputChange2 = (e) => {
    //     const {value, name} = e.target;
    //     console.log(value, name);
    //     setState({
    //       [name]: value
    //     });
    //   }

    const [title, settitle] = useState("");
    const handleTitle = (e) => {
        settitle(e.target.value);
    };

    const [Responsible, setResponsible] = useState("");
    const handleResponsible = (e) => {
        setResponsible(e.target.value);
    };

    const [Description, setDescription] = useState("");
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const [Priority, setPriority] = useState("");
    const handlePriority = (e) => {
        setPriority(e.target.value);
        console.log(e.target.value);
    };

    const [AllValue, setAllValue] = useState({
        title: '',
        responsible: '',
        description: '',
        priority: 'low' 
    })

    const Delay = (data) => {
        setState([...State, data ]);
    }

    const AllValueSave = (e) => {
        e.preventDefault()
        setAllValue({
            title: title,
            responsible: Responsible,
            description: Description,
            priority: Priority 
        })
        
        // State.push({
        //     title: title,
        //     responsible: Responsible,
        //     description: Description,
        //     priority: Priority 
        // })
        // setState(State)
        Delay({
            title: title,
            responsible: Responsible,
            description: Description,
            priority: Priority 
        })
        // setState([...State, AllValue ])
    }
    
    console.log(State);
  return (
    <div>
      <form className='card-body' onSubmit={AllValueSave}>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            className='form-control'
            value={title}
            onChange={handleTitle}
            placeholder='Title'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='responsible'
            className='form-control'
            value={Responsible}
            onChange={handleResponsible}
            placeholder='Responsible'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='description'
            className='form-control'
            value={Description}
            onChange={handleDescription}
            placeholder='Description'
          />
        </div>
        <div className='form-group'>
          <select
            name='priority'
            className='form-control'
            value={Priority}
            onChange={handlePriority}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
