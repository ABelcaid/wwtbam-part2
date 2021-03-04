

const CreateGroup = () => {

   

    let group_code =  localStorage.getItem('group_code');

    


  
    return ( 
        <div className="createGroup">
             <h1>the Group was created , use this code : <b>{group_code}</b>   to invit your friend  </h1>
            
        </div>
     );
}
 
export default CreateGroup;