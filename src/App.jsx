import React, { useState } from 'react';
import PresentationToolbar from './components/PresentationToolbar';
import MobileFrame from './components/MobileFrame';
import WelcomeScreen from './screens/WelcomeScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import HomeScreen from './screens/HomeScreen';
import OfferDetailScreen from './screens/OfferDetailScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import TalentsScreen from './screens/TalentsScreen';
import CommunityScreen from './screens/CommunityScreen';
import { MOCK_RECOMMENDATIONS } from './data/mock';

export default function App() {
  // Estado de la pantalla activa (empieza en 'welcome' o 'home')
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [previousScreen, setPreviousScreen] = useState('home');
  const [selectedOffer, setSelectedOffer] = useState(MOCK_RECOMMENDATIONS[0]);
  const [showFrame, setShowFrame] = useState(true);

  // Navegación fluida
  const handleNavigate = (screenId) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screenId);
  };

  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
    setPreviousScreen(currentScreen);
    setCurrentScreen('offer-detail');
  };

  const handleBackFromDetail = () => {
    setCurrentScreen(previousScreen === 'offer-detail' ? 'home' : previousScreen);
  };

  return (
    <div className="min-h-screen bg-stone-200/60 bg-mesh-soft flex flex-col font-sans">
      
      {/* Barra superior para evaluación y capturas académicas */}
      <PresentationToolbar
        currentScreen={currentScreen}
        onSelectScreen={handleNavigate}
        showFrame={showFrame}
        onToggleFrame={() => setShowFrame(!showFrame)}
      />

      {/* Contenedor central con el marco del móvil */}
      <MobileFrame
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        showFrame={showFrame}
      >
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStartQuestionnaire={() => handleNavigate('questionnaire')}
            onSkipToHome={() => handleNavigate('home')}
          />
        )}

        {currentScreen === 'questionnaire' && (
          <QuestionnaireScreen
            onComplete={() => handleNavigate('home')}
            onBack={() => handleNavigate('welcome')}
          />
        )}

        {currentScreen === 'home' && (
          <HomeScreen
            onSelectOffer={handleSelectOffer}
            onNavigateTab={handleNavigate}
          />
        )}

        {currentScreen === 'offer-detail' && (
          <OfferDetailScreen
            offer={selectedOffer}
            onBack={handleBackFromDetail}
          />
        )}

        {currentScreen === 'explore' && (
          <ExploreScreen
            onSelectOffer={handleSelectOffer}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            onNavigateToTalents={() => handleNavigate('talents')}
          />
        )}

        {currentScreen === 'talents' && (
          <TalentsScreen />
        )}

        {currentScreen === 'community' && (
          <CommunityScreen />
        )}
      </MobileFrame>

    </div>
  );
}
