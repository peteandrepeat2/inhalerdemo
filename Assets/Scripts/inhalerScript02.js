// Function called about 60 times per second
function Update() {
    // Get the rigidbody component
    var r2d = GetComponent("Rigidbody2D");

	 // Move the inhaler when an arrow key is pressed
    if (Input.GetKey("right")) {
        r2d.velocity.x = 10;
       	transform.rotation.y = 180;                          //This will make the sprite switch direction depending on the direction
       	}
    else if (Input.GetKey("left")) {
        r2d.velocity.x = -10;
        transform.rotation.y = 0;                          //This will make the sprite switch direction depending on the direction
        }
    else
        r2d.velocity.x = 0;
 }