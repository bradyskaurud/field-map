import Vue from 'vue';
import Router from 'vue-router';

import Map from '@/pages/Map';

// Admin Components
import Index from '@/pages/admin/Index';
import Create from '@/pages/admin/Create';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'create',
          name: 'Create',
          component: Create,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    }
  ],
});
