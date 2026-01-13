export default function Avatar3D() {
  const isMobile = window.innerWidth < 768;
  return (
    <div
  id="container"
  style={{
    height: "100%",
    width: "90%",
    maxWidth: "1600px",
    aspectRatio: "1 / 1",
    margin: "0 auto",
  }}
>
  <spline-viewer
    url={`${import.meta.env.BASE_URL}spline/scene.splinecode`}
    class="Spline-Avatar"
    style={{ transform: isMobile ? 'scale(0.9)' : 'scale(0.8)' }}
  />
</div>

  );
}
