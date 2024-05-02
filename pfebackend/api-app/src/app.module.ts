import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ProductsModule, PrismaModule, CategoriesModule, OrdersModule, AuthModule , UsersModule, EmployeesModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
