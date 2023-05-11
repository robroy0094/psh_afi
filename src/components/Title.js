const Title = () => {

    return (


         <video id="player" width="100%" height="800px" preload="none" muted autoplay playsinline loop>
              <source src={`${process.env.PUBLIC_URL}/image/Title.mp4`} type="video/mp4"/>
         </video>

    );
};

export default Title;