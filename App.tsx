import { Buffer } from 'buffer';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { WalletProvider } from "@/context/WalletContext";
import { ProtectedRoute } from "@/components/ui/ProtectedRoute";
import { FuturisticCursor } from "@/components/ui/cursor";
import { useState, useEffect, useRef } from "react";
import CinematicIntro from "@/components/ui/animations/CinematicIntro";
import Ambient from "@/components/ui/ambient";

// Import all page components
import Home from "./pages/Index";
import Gallery from "./pages/Gallery";
import CreateAgent from "./pages/CreateAgent";
import Collection from "./pages/Collection";
import AgentMarketplace from "./pages/AgentMarketplace";
import TreasureVault from "./pages/TreasureVault";
import RightsManagement from "./pages/RightsManagement";
import Bridge from "./pages/Bridge";
import Analytics from "./pages/Analytics";
import MarketplaceLaunch from "./pages/MarketplaceLaunch";
import Observability from "./pages/Observability";
import ThreadOfLife from "./pages/ThreadOfLife";
import Distribution from "./pages/distribution/Distribution";
import WzrdStudio from "./pages/wzrd/WzrdStudio";
import WzrdLibrary from "./pages/wzrd/WzrdLibrary";
import WzrdResearch from "./pages/wzrd/WzrdResearch";
import WzrdPodcasts from "./pages/wzrd/WzrdPodcasts";
import WzrdInfiniteLibrary from "./pages/wzrd/WzrdInfiniteLibrary";
import WzrdCompanions from "./pages/wzrd/WzrdCompanions";

// Conditionally import Crossmint only if we have a valid API key
import { CrossmintProvider, CrossmintAuthProvider } from "@crossmint/client-sdk-react-ui";

window.Buffer = Buffer;

const queryClient = new QueryClient();

// Validate if the API key has the correct format
const isCrossmintKeyValid = () => {
  const key = import.meta.env.VITE_CROSSMINT_CLIENT_KEY || "";
  // A valid Crossmint API key starts with "ck_" and contains development/staging/production
  return key && (key.includes("development") || key.includes("staging") || key.includes("production"));
};

// We'll use this to bypass authentication when Crossmint isn't properly configured
const hasCrossmintConfig = isCrossmintKeyValid();

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Cultivate your Creator";

  // Handle intro completion
  const handleIntroComplete = () => {
    setShowIntro(false);
    // Start the normal loading animation process after intro finishes
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Shorter loading time after intro
    return () => clearTimeout(timer);
  };

  // ASCII animation effect - only if not showing intro
  useEffect(() => {
    if (!showIntro) {
      // Simulate loading screen with ASCII animation
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // Typing effect implementation
  useEffect(() => {
    if (!isLoading && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [typedText, isLoading, fullText]);

  // ASCII Loading Screen Component
  const AsciiLoadingScreen = () => {
    const asciiFrames = [`
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          
                                                                       @@@@@@@@@@@@                                                                       
                                                             @@@@@@@%%@%@@@@@#===*@@@@@@@@@@@                                                             
                                                        @@@@@@@@@@@@@@@==-+%@@@@*==+@@@@@@@@+=+%@@                                                        
                                                   @@@@@@@@@@@@@@@%-::--=+#@@@+++==-==*@@@+=-+@##*##@@@                                                   
                                                %%@@@@@@@@@@@@@%%##*++=-=+#%%%@@@@@@#*#*+=+==-=-=-====#@@@                                                
                                             @**#%@@@@@@@##*#*##*#*#*##*+#%####***+==++=-:-:---=========*##@@                                             
                                          @#*###*#@@@@@%#######*#*+++**#*#****++**+=-:-==-:::::=#@#=---:+==*#%%@                                          
                                        @@%#++##%@@@@@@%%##*#*#**=+*++===*++*+++=-*%%#*-::--:-+@@%-:::::----=**#%@                                        
                                      @@#=-=#@@@@%#%%#%%***+*****+*+++++=+++====-+=--::.::::=@@#-:::::::::----=++**@                                      
                                    #+=::-+%@@@@@@@%%+###*#*##****++*++*#+=+-::::::-::::=**%@@#::::::::::::::=+==+**%@                                    
                                   @-::-+%@@@@@@@@@@%#%%****#%#+**+*+++**=-:-:::::::.::-::-:::::::-*:::::.::::-*****+*@                                   
                                 #+:.:-%@@@@@@@@@@@@@%**+***#*++*+++++==-=-:::.::.:::::::::::::::--::.::::.::-+=+*#*+--*@                                 
                               @=:::-*@#=+@@@@@@@@@@%*++**+****++++=+=+=*#::::::::::::::.:::::.-#*:.::-=-::.:::::-+*+*%%=+#                               
                              =--*@@=:.::+#%%%%%%%#*+*****#*****++=++#@#-:::::.::::-:.::-::::::-*-::.:=@+::::.:-::-*@@@@@#*%                              
                             @-=%#-:-:::==+*##*%@@*#%*+++***=+===++==-=-::::.:::--::::::*-:--:-.:-.:::-*%+::::-=+=-*@@@@@@@@@                             
                            @-:...:.:.==::*+###%%%##*+--*@++@@#*%+*+--+=-::::::::::::::::=:-::--:-:::::::----:::-:-*@@@@@@@@@@                            
                           %::.......=@*::-*%@%###+**--*@@@*@@@+=-----#*:::::-%*::::::::::-::::::::::::::::::=*#=:-*@@@@@@@@@@@                           
                          *::::..:.:::%#:::+#@#=+*#*+=#@@@*##*==-+*###+=:-::-=*=:::::::::::::-=-:::::.:.:::::::*=:=@@@@@@@@@@@@@                          
                         %-.+=%-....-*--:.:::=++++*@@@@@@*#@@%=-=-::::-%%#+--+#=-::::::.::.::::::::.:::::::.::::-:#@@@@@@@@@@@@@@                         
                        ==::::.:.:.::::--:.:--+*#@@@@@@@%#@@%#+====:::=+---=+=-::==+=:--:::::::::.:::::==::::.:::==@@@@@@%@@@@@@@@                        
                        =-::......:.:::::-=%@@@@@@@@@@@*+=+=%@@@=-=:::-=:::::::-=--:::----+-::::::::::::::::::.:::=@@@@@@@@@@@@@@@                        
                        -: ...::.:.:::::+@@@@@@@@@@@@%:--+#@%**++-:::::.:::--+##+::::::::--+=+#@%+-:::::.:.:.::.:@@@@@@@@@@@@@@@@@@                       
                       *  ..:..::.::::--+@@@@@%%@@@@#*=-*%@#@%%@%%@@%=-+#@@@@@@%%#+=:::::::=#@@@%%@%-::::::.:.-+==*%%@@@@@@@@@@@@%@@                      
                #@@   *-::-=-:*%@@#-=%@@@@+::-==*@@@@*.:#@@@@@@@@@@@@+=+%@@@@@@@@@@@@**+==*@@@@@@@@@@@=.:.:.::*@@+:::#%=-*@@@%%@@@%@                      
     @ @@%%%#=*@@*==# #:@@@@+.+@@@%-:=%@@@@=-=+*@@@@%:.:#@@@%*+*+*+%@= =%@@@#++++#@@@@%%##@@@@%++*#@@#=:.:.::=@@@@=...::-#@@@+*%%#**@    @%+=*%#@         
%%%@*-:-*@@%*:=@@@#-:=+.%@@@=.=@@@@:::=@@@@#-++%@@@%=.:-#@@@@=.... .--%+%@@@@.   -*@@@@@##@@@@=..::-=#-::.:.=@@@@@%- .::-*@@@+***+==#   +::-+%@@+=---*%@##
+@@@+:..+@@@*:-@@@@%+::.%@@@=.+@@@%-:.-+@@@@*-*@@@@+: :-#@@@@**#*+=::-#+%@@@@+#++=@@@@@%*+@@@@@#=:.::-:.:.::%@@@@@@*: .:-#@@@+**+==-+  @::-=*@@@-:::=*@@@+
+@@@*:::+@@@+:=@@@@@@*:.%@@@=.+@@@%:::.:*@@@@%@@@@*:.:-+#@@@@@@@@%-.:-++%@@@@@@@@@@@@@*#+:*#@@@@@@@@#@=:.::*@@@%*@@@=.::-#@@@==++-+-=@ -::-+@@@@#::--*@@@=
+@@@+-.:+@@@+.-@@*@@@@@=@@@@=.+@@@%::.. -*@@@@@@@#-:=%@@#@@@@%%%@%+-=#@+@@@@@@@@@@@%+=*@*::-+=+@@@@@@@*-.:+@@@@+%@@@@::--#@@@=::=-=-=#=::-=#@@@@@=-:-+@@@+
+@@@+:.:*@@@=.=@@#-*@@@@@@@@-.+@@@%::..  -%@@@@@%=:-#*@%%@@@@+:::--=*#%+@@@@%==%@@@+:+@@**=::::--=#@@@@+:=%@@@%*#@@@@#:--#@@@=::=----*:.:-*@@@%#@*-::+@@@=
+@@@+:..*@@%+:=@@@*:-%@@@@@@-.+@@@%:::...:=@@@@@+:.:--+##@@@@+..:::-**++%@@@%:-+%@@@##%%+%@@%+--:=%@@@@*=%@@@@@@@@@@@@+--#@@@=:.:----=.:-+%@@@=%@@=.:=@@@=
+@@@+:.:*@@@=.=@@@*: .+@@@@%=.+@@@#::.:   .+@@@#::-==+++#@@@@@@@@@@@@+++@@@@@+::+%@@@%@@+#@@@@@@@@@@@@%+#@@@@*****#@@@%--#@@@=-::-+----==*@@@%=*@@*:.=@@@+
=@@@*-:.*@@@=.=@@@#:.  :%@@%-.+@@@%::.     :#@#-:....::-%@@@@@@@@@@@@+=+@@@@%++:-*@@@@%#=###@@@@@@@@@*=*@@@@*:.  :=@@@@*-#@@@@@@@@@@+*@@%#@@@@@@@@@- -@@@=
+@@@@%*#@@@%: =@@@#:.    =@%- +@@%#:::      -++:.     .-+=+=++=+===++==+==++*+*=-====+++:+---=++++==--=*+++*+.   .-*###%+#@@%@@@@@@+=#@@@#@@=-==+@@+.-@@@=
*+@@@@@@@@*-  -*#@#-.     :*-:+=-==::.         .:.        .  :=-.-..::-::.::-=+=-:-:--=====::...:::-::...:..:   ::::::-:-=-=====-=== :=++##+.  .=%@@--@@@=
 +===+=-:-:...---::....          ..                         .====::        .:-:::   ..:-::..   ....   .:::-::                           .:--   .=-:-==@%#=
   @@*+:::::::-+@#=@@:           ::               :.        : ::.                                         ....                   .::-@@@@+.         ..::--
           @@        %             :.                                            ...                                               :-        @@@@@@       
                      :                            ..   .          .:.           .:-::::::::::.:.::.:::::..                       .:*                     
                      +                           :::.::.. . .....:::==-:....    :-====-==-=-=--=---===--::.                     .:-                      
                       :                        .:. .::::. ..::::-::-=+**=-::::.:.--=+++*+**+*++++*++*++=--..                 .:.:-#                      
                       #.                    ..:::.::-:-:-::::-----:::-==**+---:-:::===-=*#############*==-:.......  .:  .:  .::::*                       
                        -               ....:.::.::-----:--------:::::::-=+#*+==---:--::-*##%%@%@%%%%#*+==::.:.::..:::.......:--:=@                       
                        =:           ....:.::::::=--=--------:::.:..:.:::-=+#@*+---------=*#%@@@@@@%%+=++-:::.:.:.:.:.:::.:.:-:--=                        
                         =:         .....::....:::.:::::--=-:::.:.:.:.:.::::::::-=****==------==*%@@@@@@@#++==:::.:.:.:=+:.:.-::..::--=                         
                          =..        ..:.:.:.::.:::.:-.:--:.:.:.:.:..:.:::-=+=**=---=====+#@@@@@@@*=--::::.:.::-%=.:::---:.:---+                          
                           +:       ..:..:::----:---:--=----:.:.:.:.:..:.:::-=+=+++=-==-====+*%@@@@@#=-:::.:.::.:=-:.::----:::::-*                           
                            #:       .........::----=-=---:.:.:.:.:..:.:::-=**=*+++==+=+=*@@@@@%=:::.::.:::--:.::--------:--#                            
                             @-:      ..:.::.:...::::-----::.:.:.:.:.:::::::=**=*+++==+==+=++@@@@#=:::::.:::::.:.:--------::-=@                             
                              +-:.     ...:::.:::.:...::.:::.:.:.:.:.:.:::=*#+**=++**+=+-=+@%+--:::.:.--:::.:.:.::-------:--=+                              
                                +:::.    ::-*=-=-:..:.......:..:.:.::--::-+#******##*==+#+===-:::.::-+:::.::.::--------:-+#                               
                                 +=: :.  .::+*:::::.:.:..::.::::.-*@%=-#*@@@%####**+=====+--::::.::-=::.::.:.:.:.:.------::=%                                 
                                    *-:--...-#@#::... ..:::.:**+-:=@#*@%@@@@@*#**++=*+*+=::::-:-::::.:.:.:.:.:.:.::-------@                                   
                                     %*#+:.   .-@#-. ....:.:-::-*%%#=*@%#%%#+###**+*==-::::.:.-+:.:.:::.:.:--:.:...:=#                                    
                                       @##+.  ...-*=:..:...:.::::::::::=#*%***###=-::::.::.:.:::.::-::.:.:.:.....:=@                                      
                                         @%*-:: ::. =*+-:-:--:::::::::.::**+#%%*=-:::.:-++:::::::::.:.:.:.:...::*@                                        
                                           @**-:.--:.:-*%#+=-::-:::.:::-=+==##*+-:.:.::--*--:::::::::::::::.:-+#                                          
                                              #=+==--::::+#@@*=::..:::.:-+##*#=-::.:-=@@@+---:--===+****=--=@                                             
                                                ##+-..-==-=++#@@@%+-..:.:-+**=-::--:==*%%%+::.-=+###*++***                                                
                                                    #==++*####%%@*@@@%###===+====+#@%%+-=:+*#####++*@%@                                                   
                                                        #%@@%#%%%%@%@@@@@@@@@@@@@%++**##*=:..-+%@%%                                                       
                                                               @%++++++**#*##***+==::::-+#@@                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      `];
    const [frameIndex, setFrameIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setFrameIndex(prevIndex => (prevIndex + 1) % asciiFrames.length);
      }, 300);
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="fixed inset-0 bg-[#120825] z-50 flex items-center justify-center text-white">
        <div className="relative">
          <pre className="text-xs sm:text-sm md:text-base text-cyan-400 font-mono">
            {asciiFrames[frameIndex]}
          </pre>
          <div className="mt-8 text-center">
            <div className="inline-block h-2 w-2 rounded-full bg-orange-500 mr-1 animate-ping"></div>
            <div className="inline-block h-2 w-2 rounded-full bg-orange-500 mr-1 animate-ping animation-delay-200"></div>
            <div className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-ping animation-delay-400"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        {/* Cinematic Intro Animation */}
        {showIntro && (
          <CinematicIntro 
            onComplete={handleIntroComplete}
            commandText="install universal.ai"
            noiseColor="270, 90%, 60%"
          />
        )}
        
        {/* ASCII loading screen */}
        {!showIntro && isLoading && <AsciiLoadingScreen />}

        {/* Global background with ambient effects */}
        <Ambient showAsciiStreams={true} />

        {/* Global cursor effect */}
        <FuturisticCursor />

        {hasCrossmintConfig ? (
          <CrossmintProvider apiKey={import.meta.env.VITE_CROSSMINT_CLIENT_KEY || ""}>
            <CrossmintAuthProvider loginMethods={["email", "farcaster"]}>
              <WalletProvider>
                <AppContent />
              </WalletProvider>
            </CrossmintAuthProvider>
          </CrossmintProvider>
        ) : (
          <WalletProvider>
            <AppContent bypassAuth={true} />
          </WalletProvider>
        )}
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

function AppContent({ bypassAuth = false }: { bypassAuth?: boolean }) {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          <Routes>
            {/* New landing page as the root route */}
            <Route path="/" element={<Landing />} />
            
            {/* Move original Index to /index route */}
            <Route path="/index" element={<Index />} />

            {/* Dashboard and protected routes */}
            <Route path="/home" element={bypassAuth ? <Home /> : <ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/gallery" element={bypassAuth ? <Gallery /> : <ProtectedRoute><Gallery /></ProtectedRoute>} />
            <Route path="/create-agent" element={bypassAuth ? <CreateAgent /> : <ProtectedRoute><CreateAgent /></ProtectedRoute>} />
            <Route path="/collection" element={bypassAuth ? <Collection /> : <ProtectedRoute><Collection /></ProtectedRoute>} />
            <Route path="/agent-marketplace" element={bypassAuth ? <AgentMarketplace /> : <ProtectedRoute><AgentMarketplace /></ProtectedRoute>} />
            <Route path="/treasury" element={bypassAuth ? <TreasureVault /> : <ProtectedRoute><TreasureVault /></ProtectedRoute>} />
            <Route path="/rights" element={bypassAuth ? <RightsManagement /> : <ProtectedRoute><RightsManagement /></ProtectedRoute>} />
            <Route path="/bridge" element={bypassAuth ? <Bridge /> : <ProtectedRoute><Bridge /></ProtectedRoute>} />
            <Route path="/analytics" element={bypassAuth ? <Analytics /> : <ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/marketplace-launch" element={bypassAuth ? <MarketplaceLaunch /> : <ProtectedRoute><MarketplaceLaunch /></ProtectedRoute>} />
            <Route path="/observability" element={bypassAuth ? <Observability /> : <ProtectedRoute><Observability /></ProtectedRoute>} />
            <Route path="/thread-of-life" element={bypassAuth ? <ThreadOfLife /> : <ProtectedRoute><ThreadOfLife /></ProtectedRoute>} />
            <Route path="/distribution/*" element={bypassAuth ? <Distribution /> : <ProtectedRoute><Distribution /></ProtectedRoute>} />
            
            {/* WZRD routes - Some are accessible without auth */}
            <Route path="/wzrd/studio" element={<WzrdStudio />} />
            <Route path="/wzrd/library" element={bypassAuth ? <WzrdLibrary /> : <ProtectedRoute><WzrdLibrary /></ProtectedRoute>} />
            <Route path="/wzrd/research" element={bypassAuth ? <WzrdResearch /> : <ProtectedRoute><WzrdResearch /></ProtectedRoute>} />
            <Route path="/wzrd/podcasts" element={bypassAuth ? <WzrdPodcasts /> : <ProtectedRoute><WzrdPodcasts /></ProtectedRoute>} />
            <Route path="/wzrd/infinite-library" element={bypassAuth ? <WzrdInfiniteLibrary /> : <ProtectedRoute><WzrdInfiniteLibrary /></ProtectedRoute>} />
            <Route path="/wzrd/companions" element={bypassAuth ? <WzrdCompanions /> : <ProtectedRoute><WzrdCompanions /></ProtectedRoute>} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;