const Container = ({ children }) => {
   return (
      <div className="w-[320px] md:w-[720px] lg:px-6 lg:w-[1200px] mx-auto ">
         {children}
      </div>
   );
};

export default Container;
