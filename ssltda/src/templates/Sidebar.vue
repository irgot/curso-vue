<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img
                src="@/assets/adminlte/AdminLTELogo.png"
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
                style="opacity: 0.8;"
            />
            <span class="brand-text font-weight-light">SSLTDA 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img
                        src="@/assets/adminlte/user2-160x160.jpg"
                        class="img-circle elevation-2"
                        alt="User Image"
                    />
                </div>
                <div class="info">
                    <a href="#" class="d-block">Username</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <router-link
                        to="/"
                        v-slot="{ href, isActive, isExactActive }"
                    >
                        <li class="nav-item">
                            <a
                                :href="href"
                                class="nav-link"
                                :class="isExactActive ? 'active' : ''"
                            >
                                <i class="fa fa-home nav-icon"> </i>
                                <p>Página inicial</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/purchasing-management"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a
                                :href="href"
                                class="nav-link"
                                :class="isActive ? 'active' : ''"
                            >
                                <i class="fa fa-shopping-cart nav-icon"> </i>
                                <p>Gestão de Compras</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/logistics-management"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a
                                :href="href"
                                class="nav-link"
                                :class="isActive ? 'active' : ''"
                            >
                                <i class="fa fa-truck nav-icon"> </i>
                                <p>Gestão de Logística</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/exposure-management"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i class="fa fa-tasks nav-icon"> </i>
                                <p>Gestão de Exposição</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/reports"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i
                                    class="fas fa-file-alt nav-icon"
                                    aria-hidden="true"
                                >
                                </i>
                                <p>Relatórios</p>
                            </a>
                        </li>
                    </router-link>                    
                    <router-link to="/indicators" v-slot="{ isActive, href }">
                        <li class="nav-item">
                            <a
                                :href="href"
                                class="nav-link"
                                :class="isActive ? 'active' : ''"
                            >
                                <i class="fas fa-chart-line nav-icon"></i>
                                <p>Indicadores</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/schedule"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i class="fa fa-calendar nav-icon" > </i>
                                <p>Agenda</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/register"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i class="fas fa-keyboard nav-icon"> </i>
                                <p>Cadastro</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/algorithms"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i class="fa fa-clipboard nav-icon"> </i>
                                <p>Algoritmos</p>
                            </a>
                        </li>
                    </router-link>
                    <router-link
                        to="/system"
                        v-slot="{ href, isActive }"
                    >
                        <li class="nav-item">
                            <a :href="href" class="nav-link" :class="isActive?'active':''">
                                <i class="fa fa-cog nav-icon"> </i>
                                <p>Sistema</p>
                            </a>
                        </li>
                    </router-link>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {};
</script>

<style></style>
