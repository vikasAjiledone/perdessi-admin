import React from "react";

const Tableclient = () => {
  return (
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="w-1/4 px-4 py-2">#</th>
          <th class="w-1/4 px-4 py-2">Name</th>
          <th class="w-1/4 px-4 py-2">Phone No.</th>
          <th class="w-1/4 px-4 py-2">Email</th>
          <th class="w-1/4 px-4 py-2">PAN Number</th>
          <th class="w-1/4 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2 text-center text-center">Intro to CSS</td>
          <td class="border px-4 py-2 text-center text-center">Adam</td>
          <td class="border px-4 py-2 text-center text-center">858</td>
          <td class="border px-4 py-2 text-center text-center">858</td>
          <td class="border px-4 py-2 text-center text-center">858</td>
          <td class="border px-4 py-2 text-center text-center">
            <button className="bg-blue-500 mx-2 p-2">View</button>
            <button className="bg-green-500 p-2">Edit</button>
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 text-center">253</td>
          <td class="border px-4 py-2 text-center">Adam</td>
          <td class="border px-4 py-2 text-center">112</td>
          <td class="border px-4 py-2 text-center">112</td>
          <td class="border px-4 py-2 text-center">112</td>
          <td class="border px-4 py-2 text-center">
            <button className="bg-blue-500 mx-2 p-2">View</button>
            <button className="bg-green-500 p-2">Edit</button>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-center">Intro to JavaScript</td>
          <td class="border px-4 py-2 text-center">Chris</td>
          <td class="border px-4 py-2 text-center">1,280</td>
          <td class="border px-4 py-2 text-center">1,280</td>
          <td class="border px-4 py-2 text-center">1,280</td>
          <td class="border px-4 py-2 text-center">
            <button className="bg-blue-500 mx-2 p-2">View</button>
            <button className="bg-green-500 p-2">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tableclient;
