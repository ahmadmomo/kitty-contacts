function SearchBox({searchChange}){
    return(
        <div>
            <input 
            type = 'search' 
            placeholder = 'search for kittens' 
            className = "b--green bw1 br2 bg-lightest-blue ma2 pa3 avenir"
            onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;