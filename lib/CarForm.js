import 'bootstrap/dist/css/bootstrap.css'

export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <section class="position-relative py-4 py-xl-5 container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div class="card mb-5 card-body p-sm-5">
            <h2 class="text-center mb-4">Create Car</h2>
            <form onSubmit={handleSubmit}>
              <input name="make" class="form-control mb-3" type="text" placeholder="Make" />
              <input name="model" class="form-control mb-3" type="text" placeholder="Model" />
              <input name="image" class="form-control mb-3" type="text" placeholder="Image" />
              <textarea name="description" class="form-control" rows="5" placeholder="Description"></textarea>
              <div class="mb-3"></div>

              <div>
                <button class="btn btn-primary d-block w-100" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
