<!--This is the electronics guide component on the electronics subteam page-->
<!-- implement images and stuff for components: dc motor, wheels, control hub, camera-->

<script lang="ts">
</script>

<main>
  <div class="bg-base-200 rounded-box shadow-xl mt-10 pt-7">
    <h2 class="sm:text-3xl md:text-4xl text-center py-2">Major Components</h2>
    <div
      class="carousel w-full h-96 bg"
      role="region"
      aria-label="Electronics components carousel"
    >
      <div
        id="slide1"
        class="carousel-item relative w-full"
        role="tabpanel"
        aria-labelledby="slide1-tab"
      >
        <div class="py-2">
          <img
            class="absolute left-1/3 w-1/3 h-2/3 rounded-lg"
            src="/DC-motor.webp"
            alt="DC motor component used in robotics applications"
          />
          <p class="absolute w-3/4 left-20 top-3/4">
            The motors are used in a number of different components on our
            robot. They allow our robot's claw to pick up pixels and place them
            high up on the board. They are also used to initiate our hanging
            sequence. These motors allow us to do heavy-duty work.
          </p>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a
            href="#slide4"
            class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to previous slide - Servo component">❮</a
          >
          <a
            href="#slide2"
            class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to next slide - Control Hub">❯</a
          >
        </div>
      </div>
      <div
        id="slide2"
        class="carousel-item relative w-full"
        role="tabpanel"
        aria-labelledby="slide2-tab"
      >
        <div class="py-5">
          <img
            class="absolute left-1/3 w-1/3 h-2/3 rounded-lg"
            src="/Control-Hub.webp"
            alt="Control Hub - the main processing unit of the robot"
          />
          <p class="absolute w-3/4 left-20 top-3/4">
            The control hub is basically the brain of the robot. It allows us to
            manipulate the entirety of the robot with much effectiveness. It
            connects our inputs from our driver hub, and turns these
            instructions given into brand new instructions for other parts of
            the robot, allowing it to initiate a number of important sequences.
          </p>
        </div>
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a
            href="#slide1"
            class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to previous slide - DC Motor">❮</a
          >
          <a
            href="#slide3"
            class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to next slide - Servo">❯</a
          >
        </div>
      </div>
      <div
        id="slide3"
        class="carousel-item relative w-full"
        role="tabpanel"
        aria-labelledby="slide3-tab"
      >
        <div class="py-5">
          <img
            class="absolute h-2/3 left-1/3 rounded-lg"
            src="/Servo.webp"
            alt="Servo motor for precise mechanical control"
          />
          <p class="absolute w-3/4 left-20 top-3/4">
            The servos are like the precise and nimble fingers of our robot.
            They allow us to perform more precise actions than motors, at a
            tradeoff of power. On our robot, servos are used on the claw
            mechanisms among other components, and they play a crucial role in
            the making of our robot.
          </p>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
              href="#slide2"
              class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Go to previous slide - Control Hub">❮</a
            >
            <a
              href="#slide1"
              class="btn btn-circle focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Go to next slide - DC Motor">❯</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
