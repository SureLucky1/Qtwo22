import React, { useState } from "react";
import "./hide.css";

const ReadMore = () => {

const [isReadMore, setIsReadMore] = useState(false);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
        <div id="more">
      
      <p>Well, you found the right place! Here&aposs how my gig can help you:</p>
{isReadMore && <div style={{color:"black", zIndex:"99"}}><ul>
        <li>It&aposll cost as little as $20USD to create an in-depth, non-biased, professionally recorded-and-edited [High-Quality] video review, all about your music. </li>
        <li> I review all types of genres, and can do Single, EP or Album reviews of whatever scale you need. Need more than 6 tracks reviewed? Message me for a quote!
  </li>
        <li>With my 900+ 5-star ratings, you can be assured that you&aposll receive a structured, personable, detailed, honest and industry-grade addition to your press kit.</li>
        <li>No matter the scope - your review will be delivered within a maximum of 7 days!</li>
        <li>There&aposs also an *optional* upload to our &aposSP REVIEWS&apos YouTube playlist included within each gig package.</li>
        <li>Finally - once you&aposve received and accepted the delivered review, feel free to use it for whatever promotional purposes you prefer. It&aposs all yours!</li>
      </ul>
      <p>If you have any questions, please don&apost hesitate to ask! I look forward to listening to you soon. Oh, and have a great day!</p>
            
        <div>
      <span>Kind Regards,</span>
      <dl>
    <dd><b>~ Logan (A.K.A Spiderhands)</b></dd>
    <dd>-Music Reviewer / Management</dd>
  </dl></div>
  </div>
  }
    </div>
	
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="container">
	<h2>
		<ReadMore>

		</ReadMore>
	</h2>
	</div>
);
};

export default Content;
