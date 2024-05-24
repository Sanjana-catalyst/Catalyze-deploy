const WorkoutDetails=({user})=>{
    return(
        <div className="workout-details">
            
            {/* <p><strong>Username:</strong>{user.username}</p> */}
            <p><strong>email:</strong>{user.email}</p>
            <p>{user.createdAt}</p>

        </div>
    )
}

export default WorkoutDetails