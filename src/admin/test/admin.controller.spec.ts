import { Test, TestingModule } from "@nestjs/testing";

import { AdminController } from "../admin.controller";
import { AdminService } from "../admin.service";
import { JwtService } from "@nestjs/jwt";
import { Admin } from "../models/admin.models";
import { CreateAdminDto } from "../dto/create-admin.dto";
import { adminStub } from "./stubs/admin.stub";

jest.mock("../admin.service");

describe("Admin controller", () => {
  let adminController: AdminController;
  let adminService: AdminService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService, JwtService],
    }).compile();
    adminController = moduleRef.get<AdminController>(AdminController);
    adminService = moduleRef.get<AdminService>(AdminService);
    jest.clearAllMocks();
  });
  it("Admin controller should be defined", () => {
    expect(adminController).toBeDefined();
  });
  describe("Create Admin", () => {
    describe("When create Admin is called", () => {
      let admin: Admin;
      let createAdminDto: CreateAdminDto;
      beforeAll(async () => {
        createAdminDto = {
          name: adminStub().name,
          login: adminStub().login,
          hashed_password: adminStub().hashed_password,
          hashed_refresh_token: adminStub().hashed_refresh_token,
          is_active: adminStub().is_active,
          is_creator: adminStub().is_creator,
          email: adminStub().email,
          phone: adminStub().phone,
        };
        admin = await adminController.createAdmin(createAdminDto);
        console.log(admin);
      });
      test("then it should call admin Service", () => {
        expect(adminService.createAdmin).toHaveBeenCalledWith(createAdminDto);
      });
    });
  });
});
