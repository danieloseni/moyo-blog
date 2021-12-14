import Dashboard from 'components/dashboard/Dashboard'
import NewStory from 'components/new-story/NewStory';
import React from 'react'
import {Route, Routes} from 'react-router-dom';

const Body = (props: object) => {
    return (
        <div className="content-page">
                <div className="content">
                   

                    <div className="container-fluid">

                            <Routes>
                                <Route  path = "/" element = {<Dashboard {...props} />} />
                                <Route  path = "/new-story" element = {<NewStory {...props} />} />
                            </Routes>
                    


                            
                        
                    </div> 

                </div> 

               

            </div>
    )
}

Body.propTypes = {

}

export default Body
