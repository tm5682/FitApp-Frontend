

import {Routes,Route} from 'react-router-dom'

import HomePage from './homepage/HomePage';


const MainRouters = () =>
{
	
	
	
	return (


		<main className='main_content'>

			<Routes>

				<Route path='/' element={<HomePage />} />

            </Routes>
	

         </main>
	);
};


export default MainRouters;