export default function Footer() {
  return (
    <div class="flex justify-center items-center  flex-col text-center bg-white p-10 md:justify-start md:items-start ">
      <div class="flex flex-col md:justify-between md:flex-row md:space-x-40">
        <img src="/images/logo.png" alt="" class="h-12 mt-20 w-72 pl-4" />
      </div>

      <div class=" flex flex-col md:flex-row mt-12 ">
        <div class=" group">
          <a class=" text-white font-semibold" href="#">
            Home
          </a>
          <div class="my-3 h-2 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div class="group">
          <a class=" text-white font-semibold" href="#About">
            About
          </a>
          <div class="my-3 h-2 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-rounded group-hover:border-blue-50"></div>
        </div>

        <div class="group">
          <a class=" text-white font-semibold" href="#Product">
            Products
          </a>
          <div class="my-3 h-2 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div class="group">
          <a class=" text-white font-semibold" href="#">
            Support
          </a>
          <div class="my-3 h-2 mx-auto w-10 group-hover:border-b-2 md:mx-5 group-hover:border-blue-50"></div>
        </div>
        <div class="group">
          <a class=" text-white font-semibold" href="#">
            Terms & Condition
          </a>
          <div class="my-3 h-2 w-10 mx-auto group-hover:border-b-2 md:mx-5 hover:border-rounded group-hover:border-blue-50"></div>
        </div>
      </div>
    </div>
  );
}
