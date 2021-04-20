import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
           <h2>Make Admin</h2>
           <div className="form-group">
                <label className="mb-3 mt-3" htmlFor="">Email</label>
                <input type="text" className="form-control mb-3" />
                <input type="submit" className="btn btn-success"value="submit"/>
            </div> 
        </div>
    );
};

export default MakeAdmin;