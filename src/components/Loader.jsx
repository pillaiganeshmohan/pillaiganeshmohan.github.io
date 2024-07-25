import React from 'react';
import '../App.css';

const Loader = () => {
  return (
  <div className=' w-full flex items-center justify-center h-dvh bg-black'>
  <div class="cssload-body ">
		<span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
		</span>
		<div class="cssload-base">
				<span></span>
				<div class="cssload-face"></div>
		</div>
</div>
<div class="cssload-longfazers">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>
  </div>
  );
};

export default Loader;
