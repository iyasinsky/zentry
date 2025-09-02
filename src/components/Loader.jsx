const Loader = () => (
  <div className="absolute z-60 flex items-center justify-center h-dvh w-screen overflow-x-hidden bg-gray-900">
    <div className="spinner bg-gradient-to-b from-arcane-violet to-luminous-spark w-28 h-28 animate-spin rounded-full blur-xs shadow-[0_-5px_20px_0_#edff66,0_5px_20px_0_#5724ff] flex items-center justify-center">
      <div className="spinner1 bg-void-black w-28 h-28 rounded-full blur-sm"></div>
    </div>
  </div>
);

export default Loader;
