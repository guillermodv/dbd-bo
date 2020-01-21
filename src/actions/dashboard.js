export const DASHBOARD_ITEMS_REQUESTED = 'DASHBOARD_ITEMS_REQUESTED';
export const DASHBOARD_ITEMS_SUCCEEDED = 'DASHBOARD_ITEMS_SUCCEEDED';

export const requestDashboardItems = () => ({type: DASHBOARD_ITEMS_REQUESTED});
export const receiveDashboardItems = items => ({type: DASHBOARD_ITEMS_SUCCEEDED, items});

export const DASHBOARD_ITEM_REQUESTED = 'DASHBOARD_ITEM_REQUESTED';
export const DASHBOARD_ITEM_SUCCEEDED = 'DASHBOARD_ITEM_SUCCEEDED';

export const requestDashboardItem = id => ({type: DASHBOARD_ITEM_REQUESTED, id});
export const receiveDashboardItem = items => ({type: DASHBOARD_ITEM_SUCCEEDED, items});
