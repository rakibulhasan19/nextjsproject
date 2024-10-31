import Image from "next/image";
import video_poster from "@/public/img/video-poster.png";
import video_poster2 from "@/public/img/video-poster2.png";
import video_poster3 from "@/public/img/video-poster3.png";

export default function video() {
  return (
    <section className="video-section">
      <div className="wrapper video-heading">
        <div className="video-title">
          <h2 className="secondery-title black-text">Our Videos</h2>
        </div>
      </div>
      <div className="video-items">
        <div className="video">
          <video controls>
            <source src="./video/3188-166339073_small.mp4" type="video/mp4" />
            <track
              src="./video/3188-166339073_small.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-thum">
          <div className="video-owl owl-carousel owl-theme">
            <div className="item">
              <Image src={video_poster} alt="video-poster" />
            </div>
            <div className="item">
              <Image src={video_poster2} alt="video-poster2" />
            </div>
            <div className="item">
              <Image src={video_poster3} alt="video-poster3" />
            </div>
            <div className="item">
              <Image src={video_poster} alt="video-poster" />
            </div>
          </div>
          <p className="video-text">Practical introduction to Linux</p>
        </div>
      </div>
    </section>
  );
}
