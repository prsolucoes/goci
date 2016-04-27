package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/prsolucoes/goci/app"
	"github.com/prsolucoes/goci/models/util"
	"log"
)

type ProjectController struct{}

func (This *ProjectController) Register() {
	app.Server.Router.GET("/project/index", This.ProjectIndex)
	log.Println("ProjectController register : OK")
}

func (This *ProjectController) ProjectIndex(c *gin.Context) {
	util.RenderTemplate(c.Writer, "project/index", nil)
}