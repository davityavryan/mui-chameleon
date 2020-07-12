import React from 'react';

import { Redirect } from 'react-router-dom';

import ROUTES from 'helpers/routes';

function NotFoundPage() {
    return <Redirect to={ROUTES.buttons.path} />;
}

export default NotFoundPage;
