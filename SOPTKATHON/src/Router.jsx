import React from 'react';
import { Login } from './pages/Login';
import { EventList } from './pages/EventList';
import { BrowserRouter } from 'react-router-dom';
import { EventDetail } from './pages/EventDetail';
import { CreateMessage } from './pages/CreateMessage';
import Loading from './Loading';
import RequireAuthRoute from './RequireAuthRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/event:eventId" element={<EventDetail />} />
          <Route path="/create-message" element={<CreateMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
