/**
 * Widget: виджеты с различным содержимым в качестве параметра передается children
 */

const Widget = ({ title, children }) => (
    <div>
      <h4>{title}</h4>
      <div>
        {children}
      </div>
    </div>
  );
  
  export default Widget;