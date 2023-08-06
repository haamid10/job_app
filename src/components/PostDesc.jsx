import React from "react";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";

function PostDesc() {
 return (
  <div>
   <div className="border-2 border-black p-16">
    <h1 className="font-bold text-2xl">Front-End Developer</h1>
    <div className="flex gap-5 mx-2 mt-5">
     <div className="flex items-center gap-2">
      <FaCalendarWeek />
      <p className="font-light">Full-time</p>
     </div>
     <div className="flex items-center gap-2">
      <FaSignal />
      <p>Senior</p>
     </div>
     <div className="flex items-center gap-2">
      <FaComputerMouse />
      <p>Remote</p>
     </div>
    </div>
    <button className="px-10 py-3 my-10 bg-black text-white rounded-md">
     Apply Job
    </button>

    <hr class="border-b border-0 border-[#EDED] my-5 " />
    <div>
     <h1 className="font-medium text-sm">Overview</h1>
     <div className="w-[30rem] mt-2 text-start">
      <p className="font-light text-xs">
       Mailchimp is on a major mission to revolutionize how designers build
       their careers. Since day 1, our goal has been to create a gamified
       learning experience, and now we’re taking the mission to help designers
       around the world test their skills, build an amazing profile, and get
       hired. With more than 120K users from more than 150 countries, we’re a
       fast-growing remote team based in the USA and Europe.
      </p>
     </div>
    </div>

    <div className="my-8">
     <h1 className="font-medium text-sm">Roles</h1>
     <div className="w-[30rem] mt-2 text-start">
      <p className="font-light text-xs">
       You as a Product Designer stand and defend what’s best for the user. You
       will have full ownership of the end-to-end design process. You'll
       collaborate hand-in-hand with Product Management, Design, and Engineering
       to transform your design concepts into fully implemented features. You
       will conduct user research to validate your assumptions and advocate for
       the user's needs with other stakeholders. You will maintain and grow our
       Design System. You will advocate for the accessibility, consistency, and
       quality of our product. You will be part of the whole process, from the
       idea inception for potential new features and sketching rough concepts,
       building low to high fidelity prototypes and mockups to test and handle
       over the documentation to engineering.
      </p>
     </div>
    </div>

    <div>
     <h1 className="font-medium text-sm">Responsiblities</h1>
     <div className="w-[30rem] mt-2 text-start">
      <p className="font-light text-xs">
       Deliver solutions with a focus on a great user experience while balancing
       customer needs, company goals, design cohesion, and ease of
       implementation Own end-to-end user journey and all aspects of design
       execution from customer research to ideation to prototyping to usability
       tests to the final product Seek out, understand, incorporate and
       communicate qualitative and quantitative feedback throughout the design
       process leveraging surveys, user testing, and user data to measure
       feature performance in-app Work autonomously in a cross-functional, agile
       product group with Product Managers, Engineers, and Data Scientists to
       prioritize and build new features Have a deep understanding of user needs
       and business objectives in your agile group’s product area Prioritize
       appropriately: Use good judgment to make appropriate tradeoffs to speed
       up product learning and balance competing priorities
      </p>
     </div>
    </div>

    <div className="my-8">
     <h1 className="font-medium text-sm">You have</h1>
     <div className="w-[30rem] mt-2 text-start">
      <p className="font-light text-xs">
       A portfolio showcasing a clear understanding of User Interface Design
       (typography, simplicity, interactions, and visual design) At least 3+
       years of relevant design experience in digital products, a plus (but not
       necessary) would be if you have experience with educational, consumer, or
       SaaS platforms. Have experience in working with multi-disciplinary teams
       in iterative product development cycles. You are great at prioritizing
       tasks, as well as making tradeoffs between design quality and
       implementation efforts. Strategic and purposeful in making design
       decisions and you do that by integrating user, business, and technical
       considerations into your design process. You are a strong communicator
       and know how to advocate for design.
      </p>
     </div>
    </div>

    <div className="w-[30rem] mt-2 text-start">
     <p className="font-light text-xs">
      🌈 Mailchimp is 100% in support of diversity and inclusion. Our
      differences help drive our success, and having a diverse team is
      fundamental to our success. Uxcel welcomes people from any race,
      orientation, gender, religion, age, ethnicity, disability, and identity!
     </p>
    </div>
    <button className="px-8 py-2 mt-10 bg-black text-white rounded-md">
     Apply Job
    </button>
   </div>
  </div>
 );
}

export default PostDesc;
