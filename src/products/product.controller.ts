import { Request, Response } from "express";
import { productService } from "./product.service";
import { quickSortByKey } from "../utils/quickSort";
import { Product } from "./models/product.model";
import { ProductDto } from "./dto/product.dto";

export async function findAll(req: Request, res: Response) {
    const records = await productService.findAll()
    return res.json(records)
}

export async function findOne(req: Request, res: Response) {
    const { id } = req.params
    const record = await productService.findOne(+id)
    return res.json(record)
}

export async function create(req: Request, res: Response) {
    const record = await productService.create(req.body)
    return res.status(201).json({message: 'Product created successfully', data: record})
}

export async function remove(req: Request, res: Response) {
    const { id } = req.params
    productService.delete(+id)
    return res.status(201).json({message: 'Product removed successfully'})
}

// export async function update(req: Request, res: Response) {
//     const { id } = req.params
//     const record = await productService.(+id, req.body)
//     return res.status(201).json({message: 'Product updated successfully', data: record})
// }

export async function sortBy(req: Request, res: Response) {
    const { sortBy } = req.query as { sortBy: keyof ProductDto }
    if (!sortBy) {
        return res.status(400).json({message: 'sortBy is required'})
    }
    const records = await productService.findAll()
    return res.json(records)
}

