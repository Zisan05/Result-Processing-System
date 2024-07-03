

const GradeSystem = () => {
    return (
        <div className="bg-black mt-[30px] pt-[20px] pb-[40px]">
            <h1 className="text-[30px] text-center font-bold text-white bg-gradient-to-r from-white to-[#6164FF] text-transparent bg-clip-text">How to Calculate Grade point</h1>

            <div className="overflow-x-auto mt-[20px]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-[20px] text-white border-l-2 border-t-2  text-center">No</th>
        <th className="text-[20px] text-white border-l-2 border-t-2  text-center">Letter Grade</th>
        <th className="text-[20px] text-white border-l-2 border-t-2  text-center">Grade Point</th>
        <th className="text-[20px] text-white border-l-2 border-t-2  text-center">Percentage</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">1</th>
        <td className="text-[20px] text-white border-l-2 text-center">A</td>
        <td className="text-[20px] text-white border-l-2 text-center">4.0</td>
        <td className="text-[20px] text-white border-l-2 text-center">94-100%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">2</th>
        <td className="text-[20px] text-white border-l-2 text-center">A-</td>
        <td className="text-[20px] text-white border-l-2 text-center">3.7</td>
        <td className="text-[20px] text-white border-l-2 text-center">90-93%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">3</th>
        <td className="text-[20px] text-white border-l-2 text-center">B+</td>
        <td className="text-[20px] text-white border-l-2 text-center">3.3</td>
        <td className="text-[20px] text-white border-l-2 text-center">87-89%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">4</th>
        <td className="text-[20px] text-white border-l-2 text-center">B</td>
        <td className="text-[20px] text-white border-l-2 text-center">3.0</td>
        <td className="text-[20px] text-white border-l-2 text-center">83-87%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">5</th>
        <td className="text-[20px] text-white border-l-2 text-center">B-</td>
        <td className="text-[20px] text-white border-l-2 text-center">2.7</td>
        <td className="text-[20px] text-white border-l-2 text-center">80-83%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">6</th>
        <td className="text-[20px] text-white border-l-2 text-center">C+</td>
        <td className="text-[20px] text-white border-l-2 text-center">2.3</td>
        <td className="text-[20px] text-white border-l-2 text-center">77-79%</td>
      </tr>

      
      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">7</th>
        <td className="text-[20px] text-white border-l-2 text-center">C</td>
        <td className="text-[20px] text-white border-l-2 text-center">2.0</td>
        <td className="text-[20px] text-white border-l-2 text-center">73-76%</td>
      </tr>

      
      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">8</th>
        <td className="text-[20px] text-white border-l-2 text-center">C-</td>
        <td className="text-[20px] text-white border-l-2 text-center">1.7</td>
        <td className="text-[20px] text-white border-l-2 text-center">70-72%</td>
      </tr>

      
      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">9</th>
        <td className="text-[20px] text-white border-l-2 text-center">D+</td>
        <td className="text-[20px] text-white border-l-2 text-center">1.3</td>
        <td className="text-[20px] text-white border-l-2 text-center">67-69%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 text-center">10</th>
        <td className="text-[20px] text-white border-l-2 text-center">D</td>
        <td className="text-[20px] text-white border-l-2 text-center">1.0</td>
        <td className="text-[20px] text-white border-l-2 text-center">60-66%</td>
      </tr>

      <tr>
        <th className="text-[20px] text-white border-l-2 border-b-2 text-center">11</th>
        <td className="text-[20px] text-white border-l-2 border-b-2 text-center">F</td>
        <td className="text-[20px] text-white border-l-2 border-b-2 text-center">0.0</td>
        <td className="text-[20px] text-white border-l-2 border-b-2 text-center">0-59%</td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default GradeSystem;