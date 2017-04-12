
public var jumpAnimationName : String = "playerSpin";        //This should be the name of jump trigger in the animator.
public var sprayAnimationName : String = "playerSpray"; 
public var spraySound: AudioClip;
public var shakeSound: AudioClip;
private var anim : Animator;                                    //DO NOT CHANGE THIS!



function Start() {
	anim = GetComponent(Animator);
    }


// Function called about 60 times per second
function Update() {
    // Get the rigidbody component
    var r2d = GetComponent("Rigidbody2D");
    var noisedeinhaler = GetComponent("AudioSource");


	 // Move the inhaler when an arrow key is pressed
    if (Input.GetKey("right")) {
        r2d.velocity.x = 10;
       	transform.rotation.y = 180;                          //This will make the sprite switch direction depending on the direction
       	}
    else if (Input.GetKey("left")) {
        r2d.velocity.x = -10;
        transform.rotation.y = 0;                          //This will make the sprite switch direction depending on the direction
        }
	 else if( Input.GetKeyDown( KeyCode.Space ) ) {
		anim.SetTrigger (sprayAnimationName);
//		GetComponent.<AudioSource>().Play();
//		GetComponent("AudioSource").Play();
		noisedeinhaler.clip = spraySound;
		noisedeinhaler.Play();

	}
    else
        r2d.velocity.x = 0;

    if (Input.GetKeyDown("up")) {
    	r2d.velocity.y = 5;
		anim.SetTrigger (jumpAnimationName);
		noisedeinhaler.clip = shakeSound;
		noisedeinhaler.Play();
		}
}

 

     