import { Request, Response } from "express";
import { productService } from "./product.service";
import { quickSortByKey } from "../utils/quickSort";
import { Product } from "./models/product.model";
import { ProductDto } from "./dto/product.dto";

export async function findAll(req: Request, res: Response) {
    const records = await productService.findAll('id')
    return res.json(records)
}

export async function create(req: Request, res: Response) {
    const record = await productService.create(req.body)
    return res.status(201).json({message: 'Product created successfully', data: record})
}

export async function sortBy(req: Request, res: Response) {
    const { sortBy } = req.query as { sortBy: keyof ProductDto }
    if (!sortBy) {
        return res.status(400).json({message: 'sortBy is required'})
    }
    const records = await productService.findAll(sortBy)
    return res.json(records)
}
