<!--This is the electronics guide component on the electronics subteam page-->

<script lang="ts">
  let linkFirstBox =
    "https://drive.google.com/file/d/1EDPonK7Pc_Vf_9crYTMUXauCYa4-7a5h/view";
  let linkSecondBox =
    "https://mililanirobotics.gitbooks.io/frc-electrical-bible/content/";
  let linkThirdBox =
    "https://wpilib.screenstepslive.com/s/currentCS/m/kop/l/1030226-wiring-the-frc-control-system";
  let linkFourthBox =
    "https://firstfrc.blob.core.windows.net/frc2017/pneumatics-manual.pdf";

  let firstBoxText = "General Electrical System Notes";
  let secondBoxText = "Additional System notes";
  let thirdBoxText = "Wiring the FRC control system";
  let fourthBoxText = "FRC pneumatics guide";
</script>

<main>
  <div class="py-6 bg-base-300 rounded-box">
    <!--Creates the heading for the section-->
    <div class="grid card place-items-center leading-none">
      <h5 class="sm:text-xl md:text-3xl">How to get Started</h5>
      <p class="sm:text-base md:text-lg text-center leading-none my-4">
        If you are interested in joining the electronics subteam, there are many
        different online resources you can use to get a head start. There will
        be workshops to help new members learn. We suggest checking these links
        below in your own time for a better understanding of the way FRC
        electronics works.
      </p>
    </div>

    <!--Creates the buttons and dividers for the Core Values section -->
    <div class="flex flex-wrap w-full grid-cols-4">
      <!--Button corresponding to a web page-->
      <div class="grid h-100 mx-4 my-2 grow card bg-base-300">
        <a
          class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 grow card bg-red-900 text-gray-50 rounded-box place-items-center btn hover:-translate-y-2 hover:bg-red-800"
          href={linkFirstBox}
          >{firstBoxText}
        </a>
        <p class="mt-2">
          The intent of this document is to teach you (the reader) enough to go
          and do your own research and make your own informed decisions using
          the muscle between your ears about motors and their use in FRC. It is
          not an end-all-be-all but hopefully will introduce you to the tools
          we’ll be using throughout and teach you to use them yourself.
        </p>
      </div>
      <!--Button corresponding to a web page-->
      <div class="grid h-100 mx-4 my-2 grow card bg-base-300">
        <a
          class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 grow card bg-red-900 text-gray-50 rounded-box place-items-center btn hover:-translate-y-2 hover:bg-red-800"
          href={linkSecondBox}
          >{secondBoxText}
        </a>
        <p class="mt-2">
          Something to note is that we program in C++, so references to classes
          like “Encoder” and our sample codes are written in C++. However,
          classes are interchangeable in Java and C++, and there are topics
          covered in this guide that are not language-exclusive like the roboRIO
          and the Driver Station itself. We hope this is guide serves to be
          useful for you!
        </p>
      </div>
      <!--Button corresponding to the a web page-->
      <div class="grid h-100 mx-4 my-2 grow card bg-base-300">
        <a
          class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 grow card bg-red-900 text-gray-50 rounded-box place-items-center btn hover:-translate-y-2 hover:bg-red-800"
          href={linkThirdBox}
          >{thirdBoxText}
        </a>
        <p class="mt-2">
          This document details the wiring of a basic electronics board for
          bench-top testing. Some images shown in this section reflect the setup
          for a Robot Control System using Spark motor controllers. Wiring
          diagram and layout should be similar for other motor controllers.
          Where appropriate, a second set of images shows the wiring steps for
          using PWM controllers with integrated wires.
        </p>
      </div>
      <!--Button corresponding to the a web page-->
      <div class="grid h-100 mx-4 my-2 grow card bg-base-300">
        <a
          class="transition-all duration-700 ease-in-out grid h-20 mx-4 my-2 grow card bg-red-900 text-gray-50 rounded-box place-items-center btn hover:-translate-y-2 hover:bg-red-800"
          href={linkFourthBox}
          >{fourthBoxText}
        </a>
        <p class="mt-2">
          The FIRST Robotics Competition (FRC) pneumatic components are outlined
          in this document. It is being provided as a courtesy, and therefore
          does not supersede any information or rules provided in the FIRST
          Robotics Competition Manual.
        </p>
      </div>
    </div>
  </div>
</main>
