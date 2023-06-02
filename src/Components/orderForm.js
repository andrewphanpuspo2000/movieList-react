export const OrderForm = ({
  nameonchange,
  emailonchange,
  handleform,
  valueName,
  valueEmail,
}) => {
  return (
    <form
      onSubmit={handleform}
      class="shadow-sm p-3 mb-5 bg-body-tertiary rounded"
    >
      <div class="row p-3">
        <h2 class="text-center">Booking Detail</h2>
        <div class="col-md-5">
          <input
            id="nameinput"
            type="text"
            value={valueName}
            onChange={nameonchange}
            class="form-control"
            required
            placeholder="Type your name"
          />
        </div>
        <div class="col-md-4">
          <input
            id="emailinput"
            type="email"
            value={valueEmail}
            onChange={emailonchange}
            class="form-control"
            required
            placeholder="Type your Email"
          />
        </div>
        <div class="col-md-3">
          <button class="btn btn-primary w-100">Book</button>
        </div>
      </div>
    </form>
  );
};
