export default function Avatar3D() {
  return (
    <div
  id="container"
  style={{
    width: "90%",
    maxWidth: "500px",
    aspectRatio: "1 / 1",
    margin: "0 auto",
    minHeight: "300px"  // asegura que haya altura mínima
  }}
>
  <spline-viewer
    url={`${import.meta.env.BASE_URL}spline/scene.splinecode`}
    class="Spline-Avatar"
  />
</div>

  );
}
