//Hello, I hope this code reaches you well, lets start by creating an array of the images we will be using.
		//The names of the images are put into an array (we will add the .png later using concatenation)
		const image_root_names = ["1", "2", "3", "4"]
		
		let current_index = 0;
		//This is a variable setup to act as a placeholder for the current selected image. This will be updated by clicking the thumbnails and by the navigational buttons

		//Below is a function that will run as soon as the page loads (invoked at the very bottom)
		const first_load = () => { 

			set_main_image (0);
			//This just set the main image to the first image by running the set_main_image function. The parameter 0 was passed in to set the image to the first in the array. Because arrays start counting at 0.
			set_thumbnails ();
			//Now I am running the set_thumbnails function which creates all the thumbnails and chucks them below the main image. (Explained below)
	
		} 


		//This is the set_main_image function! This is how we are changing the Main Image using those root names defined earlier. We are taking the parameter and calling it index.
		const set_main_image = (index) => {

					document.querySelector("#main-image").src = "images/project" + image_root_names[index] + ".png";
 
					//We are using document.querySelector to target #main-image which is the html image tag defined above. 
					//Next, we use .src to only target the source of the image that was defined above in the html
					//The source is set using concatenation to combine: "images/" with the root name defined earlier and then adding ".png" to the end. This creates the path needed to find the image! 
					// [index] after the image_root_names puts the number passed in via the parameter to select the desired image. For example asking for image 3 via the parameter, will grab the 4th image in the array.


					//Now we will run the update thumbnails function, passing in the same index as the parameter. Making the selected thumbnail match the selected main image.
					update_thumbnails(index);
					current_index=index;
					//We just made the current_index variabale match the index that was passed in. We will use this current_index later on! But it needs to match the main image! This is where we update it! 
		}


//This function sets up all of the thumbnails after the page loads.
		const set_thumbnails = () => {


				//This loop runs through all of the items in the image_root_names and will run one time 'for each' of the items! In the parameters, the image_root_name is passed in! The index is the loop iteration count. It increases by one every loop. 
				image_root_names.forEach( (image_root_names, index) => {

				let new_thumb = document.createElement("img");
				//Here we add an element to the html using the DOM. The element is an img tag - we are putting in the variable "new_thumb"...


				new_thumb.src = "images/project" + "thumb" + image_root_names + ".jpeg";
				//Now we are using concatenation again to write the full relative path to the thumbnail images
				//Then we are updating the source of the new element in new_thumb, using .src to target only the source.

				new_thumb.className = "clickable"; 
				//Here we are adding a class to this new element: clickable - we will use this later to target the thumbnails to update their styles

			
				//Now we are adding an EventListener to listen for clicks on this new image element
				new_thumb.addEventListener("click", () => {

					//On click, we will invoke the set main image to match the thumbnail that was clicked:
					//The index is passed in as a parameter. This will run the function to update the main image.
					set_main_image(index);

				});

				//Now this is where we take all of those new image elements created in the set_thumbnails function and place them onto the page! Right now they are all in new_thumb ready to be released into the world!
				document.querySelector("#thumbnail-area").append(new_thumb);
				//We are using document.querySelector to target the thumbnail area div. This is where we are plunking the new elements. We use .append to add each element into the div after the one before. 
				});
		}


		//This is the function where we are updating the style of thumbnail based on if it is the active image. We are passing in current_index as this value has been updated by the set_main_image function, so it matches the "Main Image" always!
		const update_thumbnails = (current_index) => {

			//We are adding all of the elements with the class "clickable" to a new variable thumbnails (this will be all of the thumbnail images)
			const thumbnails = document.querySelectorAll(".clickable");

			thumbnails.forEach ((thisthumb, index) => {
			//'For each' of the thumbnails we will run this loop. The first parameter is where the thumbnail element will be held for the purpose of this loop. The index is loop iteration counter. It increases by one each loop, and this is how we will move through the thumbnails in their array.

			//We use an if statement to check if the current_index (which always matches the main image) IS NOT EQUAL to the index passed in to the loop (which is array position of the thumbnail we are testing)
			//We are seeing if this thumbnail matches the main image for each thumbnail
				if (current_index !== index){
					//The true result means that this IS NOT the same as the main image, so we will put opacity at half and make sure there is no border. 
				thisthumb.style.opacity = 0.5;
				thisthumb.style.border = "none";
				} else {
					//The false result (using else) will run if the thumbnail matches the main image. We will make the opacity 100% and add a solid blue border!
				thisthumb.style.opacity = 1;
				thisthumb.style.border = "thick solid #0000FF";
				}
			})

		} 
	

		//Alright, now we creating functions for the 4 nav buttons

		//First, the first button. This button takes you to the first image! This function is invoked by an EventListener click below!
		const set_nav_first = () => {
			//We are going to set the current_index to 0, setting this value to the first item in an array.
			current_index = 0;

			//Next, we will run the set_main_image function, passing in the current_index as a parameter. This will set the main image to the first image as well as run the update thumbnails function to ensure the thumbnails match.
			set_main_image(current_index);
		}
	
		//This function is for the button that jumps to the last image! 
		const set_nav_last = () => {

			//Here we are setting the current_index to the length of the array of image names. This means it doesnt matter how many images are in the array, it will always jump to the last one! We need to subtract one from this value to match the array postition due to arrays starting their count at 0. Meaning the value in the array will be one be one lower!
			current_index = image_root_names.length - 1;

			//Now we invoke the set main image function passing in the updated current_index as a parameter.
			set_main_image(current_index);


		}
	
		//This function is for the next btn! This will move up an image, until we reach the end, then it will wrap around to the first image.
		const set_nav_next = () => {

			//Here we are increasing the current_index if the value is less than or equal to the length of the array of image names. In this case, we need to subtract one from the length of the array to match the array position for the same reason as before: arrays start counting at 0.
			const nextImg = (current_index >= image_root_names.length-1) ? 0 : current_index + 1;

			//Using a ternary operator, if the current_index is less than the length of the array, the current_index is increased by one.
			//If the current_index value is greater than or equal to the length of the image_root_names array, zero is put into nextImg.
			//The result of this ternary operator is put into a new variable: nextImg

			set_main_image(nextImg);
			//Now that we know where to go, we can invoke set_main_image with the value we determined above.


		}
	

		//This function is for the previous button. Very similar to the next button, except reversed.
		const set_nav_prev = () => {

			//Using another ternary operator, we ensure the image will go down until the first image, then it will wrap around to the last!
			const nextImg = (current_index <= 0) ? image_root_names.length-1 : current_index - 1;
			//Similar to before, this time, if the current_index is equal to or less than zero, the nextImg variable is updated to hold the length of the root names array, which will set to the last image in the array. 
			//(Of course there is the -1 adjustment to account for arrays starting their counts at 0)
			//If the current_index is greater than zero, the nextImg is updated with the current index minus 1. This moves the main image back one!
			set_main_image(nextImg);
			//Now we run the function to update the main image, passing in nextImg in as a parameter, this will either show previous image or last image in the array.
		}	
	

		//This is what triggers the first_load function to start off setting the thumbnails and setting the main image to the first one. The event listener is listening for the window to finish loading.
		window.addEventListener("load", first_load);




		//Finally, the following four lines are event listeners listening for their respective buttons and running the according function for each navigation button.
		next_btn.addEventListener("click", set_nav_next);
		prev_btn.addEventListener("click", set_nav_prev);
		first_btn.addEventListener("click", set_nav_first);
		last_btn.addEventListener("click", set_nav_last);