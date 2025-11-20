export default function Hero() {
  return (
    <section className="w-100 py-5 bg-dark">
      <div className="container-fluid">

        <div className="row align-items-center">

          {/* LEFT SIDE – LUMINAR PHOTO */}
          <div className="col-md-6 p-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQEdgfhPZmauMg/feedshare-shrink_800/feedshare-shrink_800/0/1730715171389?e=2147483647&v=beta&t=psHbVss_17HWweohMSs1IVnLnFWiO6tZQcHVGIEq-dw"
              alt="Luminar Technolab"
              className="mx-5 img-fluid w-100 h-100 object-fit-cover"
              style={{ maxHeight: "600px",maxWidth:'500px' }}
            />
          </div>

          {/* RIGHT SIDE – CEO DETAILS */}
          <div className="col-md-6 p-5 bg-white ">
            <h4 className="text-uppercase text-dark fw-bold mb-2">
              Our CEO
            </h4>

            <div className="d-flex align-items-start gap-4">

              {/* CEO PHOTO */}
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHE2yw8isluQQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683597398498?e=2147483647&v=beta&t=bmuO2aKoAXwfRIsJfzGcAecxLnHM3-h0co7x7DOahbQ"
                alt="CEO"
                className="rounded-circle"
                width="120"
                height="120"
              />

              {/* TEXT */}
              <div>
                <h2 className="fw-bold mb-2">Rahul M Mohanakumar</h2>
                <p className="text-muted">
                  A visionary leader who built Luminar Technolab into one of
                  Kerala’s most trusted IT training institutes. With his deep
                  industry knowledge, he focuses on quality education, student
                  growth, and providing real opportunities for young tech minds.
                </p>
              </div>

            </div>

            <p className="mt-3 text-secondary">
              Under his guidance, Luminar continues to shape future developers
              with practical training, modern tools, and hands-on projects that
              prepare students for real careers in IT.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
