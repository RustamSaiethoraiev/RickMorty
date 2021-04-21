import React from 'react';
function Filter({ setSearchGender, setSearchStatus }) {
    return (
        <div>
            <form onChange={event => { setSearchGender(event.target.value) }}>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="genderless" name="gender" value="genderless" />
                <label htmlFor="genderless">Genderless</label>
                <input type="radio" id="unknown" name="gender" value="unknown" />
                <label htmlFor="unknown">Uncknown</label>
            </form>
            <form onChange={event => {
                setSearchStatus(event.target.value)
            }}>

                <input type="radio" id="status" name="status" value="alive" />
                <label htmlFor="alive">Alive</label>
                <input type="radio" id="status" name="status" value="dead" />
                <label htmlFor="dead">Dead</label>
            </form>
        </div>



    )
}
export default Filter

