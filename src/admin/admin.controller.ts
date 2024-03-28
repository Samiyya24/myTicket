import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { JwtAdminGuards } from "../guards/admin-guards";
import { JwtCreatorGuards } from "../guards/creator-guard";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtCreatorGuards)
  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin({ createAdminDto });
  }

  @HttpCode(HttpStatus.OK)
  @Post("signIn")
  async signIn(
    @Body() updateAdminDto: UpdateAdminDto
  ): Promise<{ token: string }> {
    return this.adminService.login(updateAdminDto);
  }

  // @UseGuards(JwtAdminGuards)
  @UseGuards(JwtCreatorGuards)
  @Get()
  async getAdmin() {
    return this.adminService.getAdmin();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.adminService.getAdminByID(+id);
  }
  @UseGuards(JwtCreatorGuards)
  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.updateAdminById(+id, updateAdminDto);
  }
  @UseGuards(JwtCreatorGuards)
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.adminService.deleteAdminById(+id);
  }
}
