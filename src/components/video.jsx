
export const Video = () => (
    <div style={{position:'fixed', zIndex:'-1'}}>
      <video loop autoPlay >
        <source
          src="./gmov_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
)