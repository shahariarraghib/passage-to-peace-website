import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdatePlaceInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});


    useEffect(() => {
        const url = `https://passage-to-peace-23-05-2022.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])




    const handleUpdateUser = event => {

        const url = `https://passage-to-peace-23-05-2022.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("update Successfully")
                    setUser({})
                }
            })

        event.preventDefault();
    }

    const handleNameChanage = event => {
        const updateName = event.target.value;
        const updateUser = {
            name: updateName, description: user.description, price: user.price, img:
                user.img
        }
        setUser(updateUser);
    }

    const handleDescriptionChanage = event => {
        const updateDescription = event.target.value;
        const updateUser = {
            description: updateDescription, name: user.name, price: user.price, img:
                user.img
        }
        setUser(updateUser);
    }

    const handlePriceChanage = event => {
        const updatePrice = event.target.value;
        const updateUser = {
            price: updatePrice, name: user.name, description: user.description, img:
                user.img
        }
        setUser(updateUser);
    }

    const handleImgChanage = event => {
        const updateImg = event.target.value;
        const updateUser = { img: updateImg, price: user.price, name: user.name, description: user.description, }
        setUser(updateUser);
    }
    return (
        <div>
            <h1 className='d-flex justify-content-center mt-5'>Update Package Info</h1>

            <h4 className='d-flex justify-content-center mb-5'> Package ID: {id}</h4>
            <hr />
            <form onSubmit={handleUpdateUser} className='d-flex justify-content-center p-5'>

                <input type="text" onChange={handleNameChanage} value={user.name || ''} placeholder='Name' />
                <textarea type="text" onChange={handleDescriptionChanage} value={user.description || ''} placeholder='Description' />
                <input type="text" onChange={handlePriceChanage} value={user.price || ''} placeholder='Price' />
                <input type="text" onChange={handleImgChanage} value={user.img || ''} placeholder='Image Url' />
                <input type="submit" value="Update" />
            </form>



        </div>
    );
};

export default UpdatePlaceInfo;