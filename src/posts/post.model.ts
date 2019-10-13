import { prop } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger';

export class Post {
  @ApiModelProperty({ description: '帖子标题', example: '帖子标题default' })
  @prop()
  title: string
  @ApiModelProperty({ description: '帖子文章', example: '帖子文章default' })
  @prop()
  content: string
}
